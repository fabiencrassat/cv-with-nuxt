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

interface IFollowMe {
  label: ILang;
  url: string;
  svg: string;
  [key: string]: any;
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
  followMe: Array<IFollowMe>;
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

  /*
   * Identity
   */

  public getFullName() {
    return this.curriculumVitae.identity.myself.fullName;
  }

  public getPicture() {
    return this.curriculumVitae.identity.myself.picture;
  }

  /*
   * Looking For
   */

  public getLastJob() {
    const experience = this.curriculumVitae.lookingFor.experience;
    const result = Tools.getCrossRefValue(this, experience);
    return Tools.getLangValue(result, this._lang);
  }

  public getPresentation() {
    return this.curriculumVitae.lookingFor.presentation[this._lang];
  }

  /*
   * About
   */

  public getFollowMe() {
    const followMe = this.curriculumVitae.followMe;
    const result = [];
    for (const index in followMe) {
      const item = followMe[index];
      const resultItem = Object.assign({}, item);
      for (const key in item) {
        let element = item[key];
        element = Tools.getLangValue(element, this._lang);
        resultItem[key] = element;
      }
      result.push(resultItem);
    }
    return result;
  }

  /*
   * Experiences
   */

  public getExperiences() {
    const experiences = this.curriculumVitae.experiences;
    // Clone the object not to alter it
    const result = Object.assign({}, experiences);
    for (const experienceKey in experiences) {
      const experience = experiences[experienceKey];
      // Clone the object not to alter it
      result[experienceKey] = Object.assign({}, experience);
      for (const key in experience) {
        let element = experience[key];
        element = Tools.getLangValue(element, this._lang);
        element = Tools.getCrossRefValue(this, element);
        result[experienceKey][key] = element;
      }
      result[experienceKey].id = experienceKey;
    }
    return result;
  }

  /*
   * Skills
   */

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

  /*
   * Educations
   */

  public getEducations() {
    const educations = this.curriculumVitae.educations;
    // Clone the object not to alter it
    const result = Object.assign({}, educations);
    for (const educationKey in educations) {
      const education = educations[educationKey];
      // Clone the object not to alter it
      result[educationKey] = Object.assign({}, education);
      for (const key in education) {
        let element = education[key];
        element = Tools.getLangValue(element, this._lang);
        element = Tools.getCrossRefValue(this, element);
        result[educationKey][key] = element;
      }
      result[educationKey].id = educationKey;
    }
    return result;
  }

  /*
   * Languages
   */

  public getLanguages() {
    const languages = this.curriculumVitae.languages;
    // Clone the object not to alter it
    const result = Object.assign({}, languages);
    for (const languageKey in languages) {
      const language = languages[languageKey];
      // Clone the object not to alter it
      result[languageKey] = Object.assign({}, language);
      for (const key in language) {
        let element = language[key];
        element = Tools.getLangValue(element, this._lang);
        element = Tools.getCrossRefValue(this, element);
        result[languageKey][key] = element;
      }
      result[languageKey].id = languageKey;
    }
    return result;
  }

  /*
   * Certifications
   */

  public getCertifications() {
    const certifications = this.curriculumVitae.certifications;
    // Clone the object not to alter it
    const result = Object.assign({}, certifications);
    for (const certificationKey in certifications) {
      const certification = certifications[certificationKey];
      // Clone the object not to alter it
      result[certificationKey] = Object.assign({}, certification);
      for (const key in certification) {
        let element = certification[key];
        element = Tools.getLangValue(element, this._lang);
        element = Tools.getCrossRefValue(this, element);
        result[certificationKey][key] = element;
      }
      result[certificationKey].id = certificationKey;
    }
    return result;
  }
}

class Tools {
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
