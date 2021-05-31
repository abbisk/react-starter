import './App.css';
import CommentDetail from './CommentDetail'
import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail 
      author="Abhishek" 
      timeAgo="Today at 7:00PM" 
      content="Nice blog post!" 
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Anurag" 
      timeAgo="Today at 6:00PM" 
      content="Nice blog" 
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Ashvin" 
      timeAgo="Today at 5:00PM" 
      content="Awesome blog post!" 
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Pankaj" 
      timeAgo="Today at 4:00PM" 
      content="Super post!" 
      avatar={faker.image.avatar()}
      />
      <CommentDetail 
      author="Akhil" 
      timeAgo="Today at 3:00PM" 
      content="Simply awesome" 
      avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
