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

interface ISkill {
  percentage: number;
  name: ILang;
  label?: string;
}

interface ISkillsGroup {
  label: ILang | string;
  svg: string;
  items: ISkill[];
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
    [key: string]: ISkillsGroup;
  };
  educations: {
    [key: string]: {
      date?: ILang | string;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, max-statements
  buildValues(_this: any, lang: string, input: Record<string, Record<string, any>>) {
    const entries = input;
    // Clone the object not to alter it
    const result = { ...entries };
    // eslint-disable-next-line guard-for-in
    for (const entryKey in entries) {
      const entry = entries[entryKey];
      // Clone the object not to alter it
      result[entryKey] = { ...entry };
      // eslint-disable-next-line guard-for-in
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
  getCrossRefValue(_this: any, element: any) {
    // eslint-disable-next-line no-prototype-builtins
    if (element.hasOwnProperty('crossref')) {
      const crossref = element.crossref.split('.') as string[];
      // eslint-disable-next-line no-magic-numbers
      let subElement = _this[crossref[0]];
      crossref.shift();
      crossref.forEach((ref) => {
        subElement = subElement[ref];
      });
      return subElement;
    }
    return element;
  },

  getLangValue(element: string | ILang, lang: string) {
    // eslint-disable-next-line no-prototype-builtins
    if (typeof element !== 'string' && (element.hasOwnProperty('fr') || element.hasOwnProperty('en'))) {
      return element[lang];
    }
    return element;
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
    const result = { ...skills };
    // eslint-disable-next-line guard-for-in
    for (const skillsGroupKey in skills) {
      const skillGroup = skills[skillsGroupKey];
      // Clone the object not to alter it
      result[skillsGroupKey] = { ...skillGroup };
      result[skillsGroupKey].label = Tools.getLangValue(
        skillGroup.label,
        this.lang,
      );
      skillGroup.items.forEach((skill, index) => {
        const value = skill;
        value.label = Tools.getLangValue(skill.name, this.lang) as string;
        result[skillsGroupKey].items[index] = value;
      }, this);
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
