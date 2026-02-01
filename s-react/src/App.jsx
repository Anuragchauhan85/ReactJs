
import Card from './component/card'

const App = () => {
  return (
    <div className="Parent">
      <Card
        user="Aman"
        age={18}
        img="https://plus.unsplash.com/premium_photo-1673553304559-f24f8665ec06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Anurag"
        age={21}
        img="https://images.unsplash.com/photo-1769628628044-769bff843c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
      />
      <Card
        user="Sarthak"
        age={25}
        img="https://images.unsplash.com/photo-1768593049340-6e50351b4b2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App