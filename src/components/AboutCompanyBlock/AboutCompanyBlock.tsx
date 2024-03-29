import styles from "./AboutCompanyBlock.module.scss";

const AboutCompanyBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <h2 className={styles.block__inner_title}>
          Вентилируемый фасад из композитных панелей
        </h2>

        <p className={styles.block__inner_content}>
          Технология внешнего оформления фасадов зданий, с применением
          современных композитных материалов. Это позволило добиться
          великолепных показателей, недоступных ранее. К таким показателям
          относятся:
        </p>

        <ul className={styles.block__inner_list}>
          <li className={styles.block__inner_list_item}>
            · Снижение общего веса навесной конструкции{" "}
          </li>
          <li className={styles.block__inner_list_item}>
            · Широкие возможности визуального оформления
          </li>
          <li className={styles.block__inner_list_item}>
            · Высокие показатели теплозащиты строений
          </li>
          <li className={styles.block__inner_list_item}>
            · Облегченный вес панелей позволяет значительно экономить на
            подконструкции вентилируемого фасада
          </li>
          <li className={styles.block__inner_list_item}>
            · Возможность установки на любые строительные основания{" "}
          </li>
          <li className={styles.block__inner_list_item}>
            · Простота в обслуживании и ремонте
          </li>
          <li className={styles.block__inner_list_item}>
            · Высокая долговечность
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCompanyBlock;
