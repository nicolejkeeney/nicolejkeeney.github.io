import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "Google Earth Engine",
    "xarray",
    "zarr",
    "cartopy",
    "pandas",
    "numpy",
    "scipy",
    "Dask",
    "geopandas",
    "rasterio", 
    "intake",
    "holoviews",
    "Streamlit",
];

const labelsSecond = [
    "AWS",
    "Google Cloud",
    "HPC",
    "Slurm",
    "Docker",
    "parallel processing",
    "high-throughput computing", 
    "cloud-optimized data"
];

const labelsThird = [
    "flood mapping","statistical modelling",
    "satellite data analysis",
    "biometeorology/ecohydrology",
    "climate model analysis",
    "cryospheric sciences",
    "climate/hazard dataset generation",
    "atmospheric modelling for public health applications",
];

const labelsFourth = [
    "open source library development",
    "technical documentation",
    "reproducible workflows",
    "Jupyter Notebooks",
    "scientific communication",
    "unit testing",
    "GitHub",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Scientific Programming</h3>
                    <p>Experienced in developing data analysis pipelines, processing large climate datasets & satellite imagery, and building interactive data visualizations using Python, R, and modern scientific computing libraries. My happy place is bridging the gap between science, software development, and big data.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & High-Performance Computing</h3>
                    <p>Skilled in executing and optimizing large-scale computational workflows on HPC clusters and cloud platforms, with expertise in parallel processing.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Open Science & Software</h3>
                    <p>Passionate about making science & code accessible and reproducible through open source software and clear documentation.</p>
                    <div className="flex-chips">
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faEarthAmericas} size="3x"/>
                    <h3>Atmospheric & Earth Science</h3>
                    <p>With extensive research experience across atmospheric & earth science disciplines, and degrees in Hydrologic Science & Engineering (M.S.) and Atmospheric Science (B.A.), I bring a strong scientific perspective to my software engineering work.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;