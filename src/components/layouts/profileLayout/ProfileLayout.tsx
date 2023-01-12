import styles from "./ProfileLayout.module.scss";
import LeftSideBar from "../../sidebars/LeftSidebar/LeftSidebar";
import Player from "../../player/Player";
import RightSideBar from "../../sidebars/RightSideBar/RightSideBar";
import React from "react";

interface IProfileLayout {
  children: any;
}

const ProfileLayout = ({ children }: IProfileLayout) => (
  <div className={styles.baseLayout}>
    <LeftSideBar />
    <section className={styles.sectionLayout}>
      <main className={styles.mainLayout}>
        <div className={styles.body}>
          {children}
        </div>
        <Player />
      </main>
    </section>
    <RightSideBar />
  </div>
);

export default ProfileLayout