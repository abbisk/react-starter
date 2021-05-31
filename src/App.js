import './App.css';
import CommentDetail from './CommentDetail'

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Abhishek" />
      <CommentDetail author="Anurag" />
      <CommentDetail author="Ashvin" />
      <CommentDetail author="Pankaj" />
      <CommentDetail author="Akhil" />
    </div>
  );
}

export default App;
