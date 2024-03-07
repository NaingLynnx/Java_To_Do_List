package org.talent.todolist.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.talent.todolist.entity.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
