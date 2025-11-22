export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi: string;
  doiUrl: string;
}

export const publications: Publication[] = [
  {
    authors: "Weaver, A., Keeney, N., Head, J., Heaney, A., Camponuri, S., Collender, P., Bhattachan, A., Okin, G., Eisen, E., Sondermeyer-Cooksey, G., Yu, A., Vugia, D., Jain, A., Balmes, J., Taylor, J., Remais, J., Strickland, M.",
    year: 2025,
    title: "Estimating the exposure-response relationship between fine mineral dust concentration and coccidioidomycosis incidence using speciated particulate matter data: A longitudinal surveillance study",
    journal: "Environmental Health Perspectives",
    doi: "10.1289/EHP13875",
    doiUrl: "https://doi.org/10.1289/EHP13875"
  },
  {
    authors: "Petty A. A., Keeney, N., Cabaj, A., Kushner, P., Bagnardi, M.",
    year: 2023,
    title: "Winter Arctic sea ice thickness from ICESat-2: upgrades to freeboard and snow loading estimates and an assessment of the first three winters of data collection",
    journal: "The Cryosphere",
    doi: "10.5194/tc-17-127-2023",
    doiUrl: "https://doi.org/10.5194/tc-17-127-2023"
  },
  {
    authors: "Baldocchi, D., Keeney, N., Rey-Sanchez, C., and Fisher, J.",
    year: 2021,
    title: "Atmospheric humidity deficits tell us how soil moisture deficits down-regulate ecosystem evaporation",
    journal: "Advances in Water Resources",
    doi: "10.1016/j.advwatres.2021.104100",
    doiUrl: "https://doi.org/10.1016/j.advwatres.2021.104100"
  }
];
