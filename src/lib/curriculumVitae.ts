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
    icon?: String;
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
