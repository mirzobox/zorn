export default function Contact() {
  return (
    <section className="mb-10">
      <div className="base-container">
        <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5 shadow-sm">
          <div className="flex flex-col text-center">
            <h2 className="mb-5 text-xl">
              Предоставляем техподдержку для наших клиентов
            </h2>
            <p>
              Если у вас возникнут сложности с использованием 1С-Товары,
              обращайтесь в нашу техподдержку. Техподдержка работает
              круглосуточно. Вы можете связаться с нами любыми удобными для Вас
              способами. При использовании техпомощи просим соблюдать{" "}
              <a className="text-green" href="#">
                правила обращения
              </a>
              .
            </p>
          </div>
          <div className="bg-light-green-gradient rounded-[40px] p-5">
            <p className="mb-5 text-center text-sm">
              Вы можете связаться с нами через{" "}
              <a className="text-green" href="#">
                1С-Коннект
              </a>{" "}
              и{" "}
              <a className="text-green" href="#">
                1С-Товары
              </a>
              .{" "}
              <a className="text-green" href="3">
                Поддержка пользователей
              </a>
            </p>
            <dl className="flex flex-col items-center gap-5">
              <div>
                <dt className="text-slate-green text-sm">
                  Телефон техподдержки
                </dt>
                <dd className="text-green text-xl">+7-495-111-00-10</dd>
              </div>
              <div>
                <dt className="text-slate-green text-sm">
                  E-mail техподдержки
                </dt>
                <dd className="text-green text-xl">info@rozn.info</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
