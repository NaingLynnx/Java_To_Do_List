package org.talent.todolist.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.talent.todolist.dto.NewCategoryRequest;
import org.talent.todolist.entity.Category;
import org.talent.todolist.repo.CategoryRepo;
import org.talent.todolist.service.CategoryService;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {


    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Category saveNewCategory(NewCategoryRequest request) {

//        Category category=new Category();
//        category.setName(request.getName());
//        category.setImageUrl(request.getImageUrl());

//        Category category=Category.builder()
//                .name(request.getName())
//                .imageUrl(request.getImageUrl())
//                .build();

        Category category=modelMapper.map(request,Category.class);


       return categoryRepo.save(category);

    }

    @Override
    public List<Category> findAll() {
        return categoryRepo.findAll();
    }
}
