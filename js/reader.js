import $ from 'jquery';

export const readData = () => {
  var count = $('.todo').length;
  var next = $('.todo input').first();
  var nextTodoText = count ? next.val() : '(未登録)';

  return { count, nextTodoText }
}