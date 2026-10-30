import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "zarr",
    "cloud-optimized data",
    "cloud-optimized workflows",
    "Dask",
    "HPC",
    "Slurm",
    "AWS ParallelCluster",
    "S3",
    "STAC",
    "pystac",
    "pgSTAC",
    "stac-fastapi",
    "parallel processing",
];

const labelsSecond = [
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "MapLibre",
    "AWS Lambda",
    "AWS SAM",
    "Docker",
    "AI-assisted development",
];

const labelsThird = [
    "Python",
    "xarray",
    "geopandas",
    "rioxarray",
    "rasterio",
    "pandas",
    "numpy",
    "scipy",
    "intake-esm",
    "Jupyter Notebooks",
    "climakitae",
];

const labelsFourth = [
    "climate projections",
    "climate hazard analysis",
    "flood mapping",
    "remote sensing",
    "plant-atmosphere interactions",
    "environmental health",
    "Arctic sea ice",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Geospatial Data Engineering</h3>
                    <p>I have extensive experience building pipelines that process large climate and earth science datasets in parallel on computing clusters and in the cloud, and turn them into cloud-optimized data that's fast to access. I also make our climate datasets easy to search and browse using STAC and intake-esm, open source tools for cataloging geospatial data.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I build websites, interactive maps, and data services for exploring climate data, and I deploy and maintain them in the cloud. I use AI coding tools to move quickly across the stack.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Climate Data Science</h3>
                    <p>I've analyzed climate model output, satellite imagery, and observational data in Python across years of research and industry work. I'm also a core contributor to an open source package that helps researchers and decision-makers work with California climate data.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faEarthAmericas} size="3x"/>
                    <h3>Atmospheric & Earth Science</h3>
                    <p>With extensive research experience across atmospheric & earth science disciplines, and degrees in Civil & Environmental Engineering (M.S.) and Atmospheric Science (B.A.), I bring a strong scientific perspective to my software engineering work.</p>
                    <div className="flex-chips">
                        {labelsFourth.map((label, index) => (
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
