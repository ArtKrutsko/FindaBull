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
    public class SkillsController : Controller
    {
        private readonly MyDbContext _context;

        public SkillsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Skills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Skill>>> Get()
        {
            return await _context.Skills.ToListAsync();
        }

        
        private bool SkillExists(int id)
        {
          return (_context.Skills?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
