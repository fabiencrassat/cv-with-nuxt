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
  label: ILang | string;
}

interface ISkillsGroup {
  label: ILang | string;
  svg: string;
  items: ISkill[];
  [key: string]: any;
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
      [key: string]: any;
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
      [key: string]: any;
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
      [key: string]: any;
    };
  };
  languages: {
    [key: string]: {
      label: ILang;
      description: ILang;
      [key: string]: any;
    };
  };
  certifications: {
    [key: string]: {
      date: ILang;
      label: ILang;
      [key: string]: any;
    };
  };
  hobbies: {
    [key: string]: {
      label: ILang;
      image: string;
      [key: string]: any;
    };
  };
}

export default class CurriculumVitae {
  private _lang: string;

  private curriculumVitae: ICurriculumVitae;
  // It is called dynamicaly by eval()
  private societies: ISocieties;

  public constructor(lang = 'fr') {
    this._lang = lang;
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
    const experience = this.curriculumVitae.lookingFor.experience;
    const result = Tools.getCrossRefValue(this, experience);
    return Tools.getLangValue(result, this._lang);
  }

  public getPresentation() {
    return this.curriculumVitae.lookingFor.presentation[this._lang];
  }

  public getFollowMe() {
    return Tools.buildValues(this, this._lang, this.curriculumVitae.followMe);
  }

  public getExperiences() {
    return Tools.buildValues(
      this,
      this._lang,
      this.curriculumVitae.experiences
    );
  }

  public getSkills() {
    const skills = this.curriculumVitae.skills;
    // Clone the object not to alter it
    const result = Object.assign({}, skills);
    for (const skillsGroupKey in skills) {
      const skillGroup = skills[skillsGroupKey];
      // Clone the object not to alter it
      result[skillsGroupKey] = Object.assign({}, skillGroup);
      result[skillsGroupKey].label = Tools.getLangValue(
        skillGroup.label,
        this._lang
      );
      skillGroup.items.forEach((skill, index) => {
        const value = skill;
        value.label = Tools.getLangValue(skill.label, this._lang);
        result[skillsGroupKey].items[index] = value;
      }, this);
    }
    return result;
  }

  public getEducations() {
    return Tools.buildValues(this, this._lang, this.curriculumVitae.educations);
  }

  public getLanguages() {
    return Tools.buildValues(this, this._lang, this.curriculumVitae.languages);
  }

  public getCertifications() {
    return Tools.buildValues(
      this,
      this._lang,
      this.curriculumVitae.certifications
    );
  }

  public getHobbies() {
    return Tools.buildValues(this, this._lang, this.curriculumVitae.hobbies);
  }
}

class Tools {
  public static buildValues(_this: any, lang: string, input: any) {
    const entries = input;
    // Clone the object not to alter it
    const result = Object.assign({}, entries);
    for (const entryKey in entries) {
      const entry = entries[entryKey];
      // Clone the object not to alter it
      result[entryKey] = Object.assign({}, entry);
      for (const key in entry) {
        let element = entry[key];
        element = Tools.getLangValue(element, lang);
        element = Tools.getCrossRefValue(_this, element);
        result[entryKey][key] = element;
      }
    }
    return result;
  }

  public static getCrossRefValue(_this: any, element: any) {
    // eslint-disable-next-line no-prototype-builtins
    if (element.hasOwnProperty('crossref')) {
      // eslint-disable-next-line no-eval
      return eval('_this.' + element.crossref); // NOSONAR : Dynamically executing code is security-sensitive
    }
    return element;
  }

  public static getLangValue(element: any, lang: string) {
    // eslint-disable-next-line no-prototype-builtins
    if (element.hasOwnProperty('fr') || element.hasOwnProperty('en')) {
      return element[lang];
    }
    return element;
  }
}
