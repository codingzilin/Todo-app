using Microsoft.AspNetCore.Mvc;
using todoapp_WebAPI.Services;

namespace todoapp_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Route("api/[controller]")]
    public class TodoControllers : ControllerBase
    {
        private readonly TodoService _todoService;

        public TodoControllers(TodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet("getTodoItems")]
        public IActionResult GetTodoItems()
        {
            var todoItems = _todoService.GetTodoItems();
            return Ok(todoItems);
        } //控制器就是设定get data的动作
    }
}