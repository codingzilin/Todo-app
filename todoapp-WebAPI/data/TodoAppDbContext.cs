using Microsoft.EntityFrameworkCore;
using todoapp_WebAPI.Models;

namespace todoapp_WebAPI.data
{
    public class TodoAppDbContext: DbContext
    {
        public TodoAppDbContext(DbContextOptions<TodoAppDbContext> options):base(options)
        {

        }
        public DbSet<TodoItemDTO> TodoItems {get; set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<TodoItemDTO>().HasData(
        new TodoItemDTO{Id=1, Title="Todo Item 1", isDone=false},
        new TodoItemDTO{Id=2, Title="Todo Item 1", isDone=false},
        new TodoItemDTO{Id=3, Title="Todo Item 1", isDone=false}
      );
    }
    }
    
}
