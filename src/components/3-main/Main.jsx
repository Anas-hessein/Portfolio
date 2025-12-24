import { useState } from "react";
import "./main.css";
import { projects } from "./projects.js";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(projects);

  return (
    <main id="main" className="flx">
      <section className="flx left-sec">
        <button
          onClick={() => {
            setCurrentActive("all");

            const newArr = projects.filter((item) => {
              return (
                item.category === "css" ||
                item.category === "js" ||
                item.category === "react" ||
                item.category === "other"
              );
            });
            setArr(newArr);
          }}
          style={ {transition : "0.3s"}}
          className={currentActive === "all" ? "active" : null} 
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setCurrentActive("css");

            const newArr = projects.filter((item) => {
              return item.category === "css";
            });

            setArr(newArr);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setCurrentActive("js");

            const newArr = projects.filter((item) => {
              return item.category === "js";
            });

            setArr(newArr);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            setCurrentActive("react");

            const newArr = projects.filter((item) => {
              return item.category === "react";
            });
            setArr(newArr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            setCurrentActive("other");
            const newArr = projects.filter((item) => {
              return item.category === "other";
            });
            setArr(newArr);
          }}
          className={currentActive === "other" ? "active" : null}
        >
          Other
        </button>
      </section>

      <section className="flx right-sec">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>

                <div className="flx  icons">
                  <div style={{ gap: "11px" }} className="  flx">
                    <a href={item.plyblePath} target="_blank" className="icon-link"></a>
                    <a href={item.gitPath} target="_blank" className="icon-github"></a>
                  </div>

                  {item.readmePath && (
                    <a className="link flx" href={item.readmePath} target="_blank">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-up-right"
                      ></span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
