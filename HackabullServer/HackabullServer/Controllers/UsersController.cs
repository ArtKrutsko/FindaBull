using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HackabullServer.Context;
using HackabullServer.Models;

namespace HackabullServer.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class UsersController : Controller
    {
        private readonly MyDbContext _context;

        public UsersController(MyDbContext context)
        {
            _context = context;
        }



        [HttpGet("email")]
        public async Task<ActionResult<User>> Get(string email)
        {
            User user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
            if (user == null)
                return NotFound();
            return new ObjectResult(user);
        }


        // POST api/users
        [HttpPost("login")]
        public async Task<ActionResult<User>> Post(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            var checkUser = _context.Users.Where(x => x.Email == user.Email).FirstOrDefault();
            
            if(checkUser == null)
            {
                return BadRequest();
            }
                
            else
            {
                if(checkUser.Password != user.Password)
                {
                    return BadRequest();
                }
            }

            return Ok(user);
        }

        // POST api/users
        [HttpPost("update")]
        public async Task<ActionResult<User>> PostUser(User user)
        {

            User newUser = new User() { FirstName = user.FirstName, LastName = user.LastName, Bio = user.Bio, Email= user.Email, Experience = user.Experience, Username = user.Username, GitHub = user.GitHub, LinkedIn = user.LinkedIn, Phone=user.Phone, Password = "admin", Skills = new List<Skill>()};

            
            _context.Users.Add(newUser);    
            await _context.SaveChangesAsync();
            return Ok(newUser);
        }

        private bool UserExists(int id)
        {
          return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
