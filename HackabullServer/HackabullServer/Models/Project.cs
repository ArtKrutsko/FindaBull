namespace HackabullServer.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public List<User>? Users { get; set; } = new List<User>();
        public List<Skill>? Skills { get; set; } =  new List<Skill> { };
    }
}
