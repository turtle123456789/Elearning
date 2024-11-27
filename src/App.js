import { routes } from './routes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          {routes?.map((routes,index)=>(
            <Route key={`first-route${index}`} path={routes?.path} element={routes?.element}>
              {routes?.children?.map((route,index1)=>(
                <Route key={`second-route${index1}`} path={route?.path} element={route?.element}/>
              ))}
            </Route>
          ))}
        </Routes>
    </div>
  );
}

export default App;
