using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HackabullServer.Context;
using HackabullServer.Models;
using System.Net.Mail;
using System.Net;

namespace HackabullServer.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly MyDbContext _context;

        public ProjectsController(MyDbContext context)
        {
            _context = context;
        }


        // GET: projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> Get()
        {
            var res = await _context.Projects.ToListAsync();
            return res;
        }

        // POST: /Сreate
        [HttpPost]
        public async Task<IActionResult> Post(Project project)
        {
            Project newProj = new Project() { Name = project.Name, Description  =project.Description };    
            _context.Add(newProj);
            await _context.SaveChangesAsync();
            return Ok(newProj);
        }

        // POST: /Send
        [HttpGet("apply")]
        public async Task<ActionResult<User>> GetEmail(string EmailAndText)
        {
            Console.WriteLine(EmailAndText);

            if (EmailAndText == null)
            {
                Console.WriteLine("YA NIHYA NE POLUCHIL");
                return BadRequest();
            }

            // example@gmail.com;loremipsumdolorsitamtet
            var filter = EmailAndText.Split(';');

            MailAddress from = new MailAddress("somemail@gmail.com", "FindaBull");
            MailAddress to = new MailAddress(filter[0]);
            MailMessage m = new MailMessage(from, to);
            m.Subject = "You have a new application for a project!";
            m.Body = "Hi! Someone wants to join your project and sent you this greeting message: " + filter[1];
            m.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new NetworkCredential("findabullusf@gmail.com", "ksadjhoeepmlvwjp");
            smtp.EnableSsl = true;
            smtp.Send(m);
            return Ok();
        }
    }
}
