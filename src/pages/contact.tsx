import { FormEvent } from 'react';

const Contact = (): JSX.Element => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-wrap -mx-4 items-center">
      <div className="px-4 py-4 w-full md:py-0 md:w-2/4">
        <h1 className="text-4xl leading-snug">Want To Get In Touch?</h1>
        <p>
          Four dollar toast biodiesel plaid salvia actually pickled banjo
          bespoke mlkshk intelligentsia edison bulb synth.
        </p>
        <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
        <p>
          Hashtag swag health goth air plant, raclette listicle fingerstache
          cold-pressed fanny pack bicycle rights cardigan poke.
        </p>
      </div>
      <div className="px-4 w-full md:w-2/4 ">
        <div className="py-8 px-10 bg-white shadow rounded">
          <form className="form contact-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm capitalize mb-2">
                your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded w-full bg-gray-100 border border-gray-300 py-1 px-3 leading-relaxed"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm capitalize mb-2">
                your email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="rounded w-full bg-gray-100 border border-gray-300 py-1 px-3 leading-relaxed"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm capitalize mb-2"
              >
                message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="rounded w-full bg-gray-100 border border-gray-300 py-1 px-3 leading-relaxed"
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full rounded capitalize py-3 px-4 leading-none bg-indigo-700 hover:bg-indigo-600 text-white text-base"
            >
              submit
            </button>
          </form>
        </div>

        {/*  <StaticImage
          src="../assets/images/about.jpeg"
          alt="Person Pouring Salt in Bowl"
          placeholder="blurred"
          className="h-96 rounded"
        /> */}
      </div>
    </div>
  );
};

export default Contact;

{
  /* <main className="page">
<section className="contact-page">
  <article className="contact-info">
    <h3></h3>
    
  </article>
  <article>
    <form className="form contact-form">
      <div className="form-row">
        <label htmlFor="name">your name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">your email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="form-row">
        <label htmlFor="message">message</label>
        <textarea name="message" id="message"></textarea>
      </div>
      <button type="submit" className="btn block">
        submit
      </button>
    </form>
  </article>
</section>
</main> */
}
