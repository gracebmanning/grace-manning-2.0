export function clickScroll(id){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function wrapIndividualLetters(string, classText){
    const stringArray = string.split('');
    return stringArray.map((letter, index) => 
      <span className={classText} key={index}>{letter}</span>
    );
}

export function wrapIndividualLettersNumbered(string, classText){
    const stringArray = string.split('');
    return stringArray.map((letter, index) => 
      <span className={classText} id={classText+index} key={index}>{letter}</span>
    );
}