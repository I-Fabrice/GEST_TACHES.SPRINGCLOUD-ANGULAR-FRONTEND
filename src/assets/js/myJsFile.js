function newTask(data){
  // var data = 1
  console.log(data);
  document.getElementById('task-'+data).innerHTML +=

  +'<li class="completed" id="item-'+data+'">'
      +'<p>Todo List '+data+'</p>'

          +'<i class="bx bx-dots-vertical-rounded" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>'
          +'<i class="dropdown-menu">'
                +'<a class="dropdown-item">Options</a>'
                +'<a class="dropdown-item" (click)="delTask('+data+')">Delete</a>'
          +'</i>'
  +'</li>';
}
