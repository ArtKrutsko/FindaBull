using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using HackabullServer.Models;

namespace HackabullServer.Context
{
    public class MyDbContext :DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Skill> Skills{ get; set; }
        public DbSet<Project> Projects{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {            
            optionsBuilder.UseSqlServer(@"workstation id=gorilka.mssql.somee.com;packet size=4096;user id=bulbasd_SQLLogin_2;pwd=c763p2nxvg;data source=gorilka.mssql.somee.com;persist security info=False;initial catalog=gorilka;TrustServerCertificate=true");
            //optionsBuilder.UseSqlServer(@"Uid=postgres;Pwd=admin;Host=34.29.181.217;Database=postgres;TrustServerCertificate=true");
        }
        
    }
}
