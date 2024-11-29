import { routes } from './routes';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateItem } from './redux/slides/cartSlice';
function App() {
  const dispatch = useDispatch();
  const cartData = localStorage.getItem("listcart");
  const cart = cartData ? JSON.parse(cartData) : [];
  const [check, setCheck] = useState(true);
  useEffect(()=>{
    if(cart.length>0 && check){
      dispatch(updateItem(cart))
      setCheck(false)
    }
  },[check])
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
