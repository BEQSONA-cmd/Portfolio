import Image from 'next/image';

export default function Home() 
{
    return (
        <article id="work" className="wrapper style3 py-16">
          <div className="container mx-auto flex flex-wrap">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 p-4">
              <Image
                className="large-image"
                src="/images/me.jpg"
                alt="Beqa Tvildiani"
                width={400}
                height={400}
                style={{ borderRadius: '20%' }}
              />
            </div>

            {/* Text on the right */}
            <div className="w-full md:w-1/2 p-4">
              <header>
                <h1 className="text-4xl font-bold">
                  Hi. I'm <strong>Beqa Tvildiani</strong>.
                </h1>
              </header>
              <p className="mb-4 text-lg font-medium">
                <strong>I am a Software Engineer proficient 👨‍💻.</strong> Passionate about crafting efficient code, building dynamic web applications, and automating tasks.
              </p>
              <a href="portfolio">
                  <button className="text-lg shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 font-black py-3 px-6 rounded-lg hover:scale-105 duration-300">
                  Get in touch with me
              </button>
              </a>
            </div>
          </div>
        </article>
    );
  }
  