import {useEffect, useState} from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import {registerMicroApps, start} from "qiankun";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    registerMicroApps(
        [
          {
            name: 'taobao',
            entry: '//localhost:7101',
            container: '#subapp-viewport',
            loader: (loading) => setLoading(loading),
            activeRule: '/#/taobao',
          },
          {
            name: 'baidu',
            entry: '//localhost:7102',
            container: '#subapp-viewport',
            loader: (loading) => setLoading(loading),
            activeRule: '/#/baidu',
          },
        ],
    );
    start();
  }, []);

  // 也 OK
  // const pushState = () => {
  //   const event = new Event('hashchange');
  //   window.dispatchEvent(event);
  // }

  return (
    <HashRouter>
      <div className="app">
        <div className="sidebar">
          <h1>正常更新的侧边栏</h1>
          <ul>
            <li>
              <a href='/#/taobao/home'>淘宝首页</a>
            </li>
            <li>
              <a href='/#/taobao/about'>淘宝关于</a>
            </li>
          </ul>

          <h1>无法更新的侧边栏</h1>
          <ul>
            <li>
              <Link to='/taobao/home'>淘宝首页</Link>
            </li>
            <li>
              <Link to='/taobao/about'>淘宝关于</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/taobao/home" element={null} />
          <Route path="/taobao/about" element={null} />
        </Routes>

        <div id="subapp-viewport" />
      </div>
    </HashRouter>
  );
}

export default App;
