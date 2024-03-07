package org.talent.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.talent.todolist.dto.NewCategoryRequest;
import org.talent.todolist.entity.Category;
import org.talent.todolist.service.CategoryService;
import org.talent.todolist.utitlity.HttpResponse;

import java.util.List;

import static org.talent.todolist.utitlity.HttpResponse.createResponse;

@RestController
@CrossOrigin
@RequestMapping("categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    @PostMapping
    public ResponseEntity<HttpResponse<Category>> saveNewCategory(@RequestBody NewCategoryRequest request){
       Category category= categoryService.saveNewCategory(request);
        return createResponse(category,HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Category>> getCategory(){
        List<Category> categoryList=categoryService.findAll();
        return new ResponseEntity<>(categoryList,HttpStatus.OK);
    }
}
