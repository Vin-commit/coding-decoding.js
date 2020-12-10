/*
 / Fournit une chaîne transformée à partir d'une chaîne utilisable donnée en paramètre.
 /
 /Usage : se placer dans une cellule du tableur lié et entrez =coding("<chaine utilisable>") qui renvoie sa chaîne transformée.
*/
function coding(st)
{
  res = "";
  for (let i = 0; i < st.length; i++) 
  {
    res = res + (st.charCodeAt(i)+15)+'-';
  }
  return res;
}

 /*
 / Fournit une chaîne utilisable à partir d'une chaîne de données transformées par la fonction ci-dessus qui est donnée en paramètre.
 /
 /Usage : se placer dans une cellule du tableur lié et entrez =coding("<chaine transformée>") qui renvoie sa chaîne utilisable. 
 /
*/
function decoding(st)
{
  res = "";
  for (let i = 0; i < st.split('-').length; i++) 
  {
    res = res + String.fromCharCode(parseInt(String(st.split('-')[i]), 10)-15);
  }
  return res;
}
