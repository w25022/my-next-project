import styles from "../page.module.css";
import Image from "next/image";

export default function Recruit() {
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>採用情報</h1>
          <p className={styles.description}>
            現在募集ポジションはありません。詳細は後日発表します。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
    </>
  );
}
