import './App.css';
import CommentDetail from './CommentDetail'

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Abhishek" timeAgo="Today at 7:00PM" content="Nice blog post!" />
      <CommentDetail author="Anurag" timeAgo="Today at 6:00PM" content="Nice blog" />
      <CommentDetail author="Ashvin" timeAgo="Today at 5:00PM" content="Awesome blog post!" />
      <CommentDetail author="Pankaj" timeAgo="Today at 4:00PM" content="Super post!" />
      <CommentDetail author="Akhil" timeAgo="Today at 3:00PM" content="Simply awesome" />
    </div>
  );
}

export default App;
