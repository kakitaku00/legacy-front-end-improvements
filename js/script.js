import './mount';
import $ from 'jquery';
import Vue from 'vue';
import { readData } from './reader';
import {
  // writeTodoCount,
  // toggleTodoList,
  // toggleTodoEmpty,
  addTodo,
  removeTodo
} from './writer';

// function updateAll() {
//   const { count, nextTodoText } = readData();

//   EventBus.$emit(UPDATE_NEXT_TODO_TEXT, nextTodoText);
//   EventBus.$emit(UPDATE_TODO_COUNT, count);

//   // toggleTodoList(count);
//   // toggleTodoEmpty(count);
// }

$(function() {
  $('#addTodo').on('click', function() {
    addTodo();
  });

  $('#todoList').on('click', '.delete', function() {
    removeTodo(this, $('#todoList').find('.delete').index(this));
  });
});
