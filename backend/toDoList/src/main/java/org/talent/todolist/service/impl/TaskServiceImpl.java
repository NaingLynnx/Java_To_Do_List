package org.talent.todolist.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.talent.todolist.dto.NewTaskRequest;
import org.talent.todolist.entity.Category;
import org.talent.todolist.entity.Task;
import org.talent.todolist.repo.CategoryRepo;
import org.talent.todolist.repo.TaskRepo;
import org.talent.todolist.service.TaskService;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepo taskRepo;

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    ModelMapper modelMapper;
    @Override
    public Task saveNewTask(NewTaskRequest newTaskRequest) {

        Task task=modelMapper.map(newTaskRequest,Task.class);
        Category category=categoryRepo.findById(newTaskRequest.getCategoryID()).get();
        task.setCategory(category);
        return taskRepo.save(task);
    }

    @Override
    public List<Task> findAll() {
        return taskRepo.findAll();
    }
}
