export default function Comments({ params }) {
  console.log(params); // Output: { id: 1, commentId: 2}
  return (
    <h1>
      Post Page ID: {params.id}, Comment ID: {params.commentId}
    </h1>
  ); // Output : Post Page ID: 1, Comment ID: 2
}
