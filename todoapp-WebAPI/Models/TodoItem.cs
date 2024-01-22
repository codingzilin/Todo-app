using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todoapp_WebAPI.Models
{
    public class TodoItemDTO
    {
        public int Id { get; set;}
        public string Title { get; set;} = string.Empty;
        public bool isDone { get; set;}
    }
}