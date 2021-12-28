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
        <ul>
          <ul>淘宝</ul>
          <ul>
            <li>
              <a href='/#/taobao/home'>淘宝首页</a>
            </li>
            <li>
              <a href='/#/taobao/about'>淘宝关于</a>
            </li>
          </ul>
          <ul>
            百度
          </ul>
        </ul>

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
