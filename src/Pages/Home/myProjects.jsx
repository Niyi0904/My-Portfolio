import data from '../../data/index.json';

const MyProjects = () => {
  return (
    <div className='project-section'>
        <h1>Recent Projects</h1>
      <div className='project-content' >
        {data?.portfolio?.map((item, index) => (
          <div> 
            <div key={index} className='niyi'>
              <div className='project-card'>
                  <div>
                    <img className='project-card-img' src={item.src} alt="Placeholder" />
                  </div>
                  <div>
                      <div className='projects-description'>
                          <h3 className="portfolio--section--title">{item.title}</h3>
                          <p className="text-md">{item.description}</p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="project-btn"> 
              <button className='btn btn-project'>
                <a href="https://github.com/Niyi0904">
                  visit My GitHub
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;

{/* <p className="text-sm portfolio--link">
  <a href={item.url}>
    {item.link}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 20 19"
      fill="none"
    >
      <path
        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
        stroke="currentColor"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</p> */}