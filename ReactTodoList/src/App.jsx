import Header from "../components/Header";
import Tasklist from "../components/Tasklist";

function App() {
    return (
        <>
            <div className="container-fluid text-center bg-primary-subtle min-vh-100 p-4">
                <Header />
                <Tasklist />
            </div>
        </>
    );
}

export default App;
