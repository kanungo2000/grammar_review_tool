export default {
  svgDeleteComment: `<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12" class="grammar-view__delete-comment"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>`,
  svgEditComment: `<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14" class="grammar-view__edit-comment"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>`,
  addCommentToRowButton: `<a href="#" class="button button_type_link button_theme_simple grammar-view__add-comment-to-row-button">Comment</a>`,
  commentTemplate(
    userName,
    commentContent,
    commentId,
    updateOrDelete = true
  ) {
    const commentIdAttr = `comment-id="${commentId}"`
    const idAttr = `id="comment-${commentId}"`

    return `<div class="grammar-view__comment-holder" ${commentIdAttr} ${idAttr}><div class="grammar-view__comment-header"><span class="grammar-view__username">${userName}</span> ${updateOrDelete ? '<div class="grammar-view__comment-crud-actions">' + this.svgEditComment + this.svgDeleteComment + '</div>' : ''}</div><div class="grammar-view__comment-content">${commentContent}</div></div>`
  },
}
