import './App.css';
import CommentDetail from './CommentDetail'

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Abhishek" timeAgo="Today at 7:00PM"/>
      <CommentDetail author="Anurag" timeAgo="Today at 6:00PM" />
      <CommentDetail author="Ashvin" timeAgo="Today at 5:00PM" />
      <CommentDetail author="Pankaj" timeAgo="Today at 4:00PM" />
      <CommentDetail author="Akhil" timeAgo="Today at 3:00PM" />
    </div>
  );
}

export default App;
