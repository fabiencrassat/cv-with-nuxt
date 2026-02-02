import fabien from '~/resources/fabien.json';
import jsonSocieties from '~/resources/societies.json';

interface ILang {
  fr: string;
  en: string;
  [key: string]: string;
}
interface ILangArray {
  fr: string[];
  en: string[];
  [key: string]: string[];
}

interface ISocieties {
  [key: string]: {
    name: string;
    address: string;
    siteurl?: string;
    icon?: string;
  };
}

interface ICrossRef {
  crossref: string;
}

interface ICurriculumVitae {
  identity: {
    myself: {
      fullName: string;
      picture: string;
    };
  };
  followMe: {
    [key: string]: {
      label: ILang;
      url: string;
      svg: string;
    };
  };
  lookingFor: {
    experience: ICrossRef;
    presentation: ILang;
  };
  experiences: {
    [key: string]: {
      date: ILang;
      job: ILang;
      jobImage: string;
      society: ICrossRef;
      missions?: ILangArray;
    };
  };
  skills: {
    [key: string]: {
      label: ILang;
      svg: string;
      items: {
        percentage: number;
        name: ILang;
      }[];
    };
  };
  educations: {
    [key: string]: {
      date?: ILang;
      dates?: number[];
      label: ILang;
      description: ILang;
    };
  };
  languages: {
    [key: string]: {
      label: ILang;
      description: ILang;
    };
  };
  certifications: {
    [key: string]: {
      date: ILang;
      label: ILang;
      image: string;
    };
  };
  hobbies: {
    [key: string]: {
      label: ILang;
      image: string;
    };
  };
}

const Tools = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buildValues(_this: CurriculumVitae, lang: string, input: Record<string, Record<string, any>>) {
    const entries = input;
    // Clone the object not to alter it
    const result = { ...entries };
    for (const entryKey in entries) {
      const entry = entries[entryKey];
      // Clone the object not to alter it
      result[entryKey] = { ...entry };
      for (const key in entry) {
        let element = entry[key];
        element = Tools.getLangValue(element, lang);
        element = Tools.getCrossRefValue(_this, element);
        result[entryKey][key] = element;
      }
    }
    return result;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCrossRefValue(_this: CurriculumVitae, element: any) {
    // eslint-disable-next-line no-prototype-builtins
    if (element.hasOwnProperty('crossref')) {
      const crossref = element.crossref.split('.') as string[];
      let subElement = _this[crossref[0] as keyof typeof _this];
      crossref.shift();
      for (const ref of crossref) {
        subElement = subElement[ref as keyof typeof subElement];
      }
      return subElement;
    }
    return element;
  },

  getLangValue(element: string | ILang, lang: string): string {
    // eslint-disable-next-line no-prototype-builtins
    if (typeof element !== 'string' && (element.hasOwnProperty('fr') || element.hasOwnProperty('en'))) {
      return element[lang] as string;
    }
    return element as string;
  },
};

export default class CurriculumVitae {
  private readonly lang: string;

  private readonly curriculumVitae: ICurriculumVitae;
  // It is called dynamicaly by eval()
  private readonly societies: ISocieties;

  public constructor(lang = 'fr') {
    this.lang = lang;
    this.curriculumVitae = <ICurriculumVitae>fabien;
    this.societies = <ISocieties>jsonSocieties;
  }

  public getFullName() {
    return this.curriculumVitae.identity.myself.fullName;
  }

  public getPicture() {
    return this.curriculumVitae.identity.myself.picture;
  }

  public getLastJob() {
    const { experience } = this.curriculumVitae.lookingFor;
    const result = Tools.getCrossRefValue(this, experience);
    return Tools.getLangValue(result, this.lang);
  }

  public getPresentation() {
    return this.curriculumVitae.lookingFor.presentation[this.lang];
  }

  public getFollowMe() {
    return Tools.buildValues(this, this.lang, this.curriculumVitae.followMe);
  }

  public getExperiences() {
    return Tools.buildValues(
      this,
      this.lang,
      this.curriculumVitae.experiences,
    );
  }

  public getSkills() {
    const { skills } = this.curriculumVitae;
    // Clone the object not to alter it
    const result: Record<string, {
      label: string;
      svg: string;
      items: {
        percentage: number;
        label: string;
      }[];
    }> = {};
    for (const [skillsGroupKey, skillGroup] of Object.entries(skills)) {
      result[skillsGroupKey] = {
        items: skillGroup.items.map((item) => ({
          label: Tools.getLangValue(item.name, this.lang),
          percentage: item.percentage,
        })),
        label: Tools.getLangValue(skillGroup.label, this.lang),
        svg: skillGroup.svg,
      };
    }
    return result;
  }

  public getEducations() {
    return Tools.buildValues(this, this.lang, this.curriculumVitae.educations);
  }

  public getLanguages() {
    return Tools.buildValues(this, this.lang, this.curriculumVitae.languages);
  }

  public getCertifications() {
    return Tools.buildValues(
      this,
      this.lang,
      this.curriculumVitae.certifications,
    );
  }

  public getHobbies() {
    return Tools.buildValues(this, this.lang, this.curriculumVitae.hobbies);
  }
}
