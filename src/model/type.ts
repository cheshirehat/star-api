export interface Stars {
  starrysky: {
    result: string;
    star: Star;
  };
}

export interface Star {
  starrysky: {
    result: string;
    star: {
      hrNo: string;
      jpName: string;
      enName: string;
      alias: string;
      grade: string;
      visualGradeFrom: string;
      visualGradeTo: string;
      weight: string;
      radius: string;
      temperature: string;
      intensityOfLight: string;
      distance: string;
      rightAscension: string;
      celestialDeclination: string;
      bayerDesignation: string;
      bayerDesignationNo: string;
      flamsteedDesignation: string;
      content: string;
      origin: string;
      confirmed: string;
      image: {
        url: string;
        content: string;
      };
    };
  };
}
