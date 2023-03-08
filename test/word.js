let user = prompt("Enter a text --> ");

function count_space(user) {
  let i = 0;
  let count = 0;
  while (i < user.length) {
    if (user[i] == " ") {
      count++;
    }
    i++;
  }

  return count;
}

function sentence_count(user) {
  let i = 0;
  let count = 0;
  while (i < user.length) {
    if (user[i] != " ") {
      count++;
    }
    i++;
  }

  return count;
}

function count_of_upercase(user) 
{
  let arr_up = ["A","B","C","D","E","F","G","H","I","J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let i = 0;
  let j = 0;
  count = 0;
  while (i < user.length) 
  {
    if (user[i] == arr_up[j])
    {
      count++;
    }
    j++;
    if (j == arr_up.length)
    {
      i++;
      j = 0;
    }
  }

  return (count);
}

function count_of_lowercase(user) {
  let arr_lw = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  let i = 0;
  let j = 0;
  count = 0;
  while (i < user.length) 
  {
    if (user[i] == arr_lw[j])
    {
      count++;
    }
    j++;
    if (j == arr_lw.length)
    {
      i++;
      j = 0;
    }
  }
  return (count);
}

// ===========================

function esacpe_spaces(user, i)
{
  while (user[i] == " ")
  {
    i++;
  }
  return (i)
}

function go_to_space(user, i)
{
  while (user[i] != " ")
  {
    i++;
  }
  return (i);
}

// ========================  This is need to fix ================================================
function upercase(user, i) 
{
  let arr_up = ["A","B","C","D","E","F","G","H","I","J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let j = 0;
  let count = false;
  while (i < user.length) 
  {
    if (user[i] == arr_up[j])
    {
      count = true;
      return (count)
    }
    j++;
    if (j == arr_up.length)
    {
      i++;
      j = 0;
    }
  }
  return (count);
}

function special_name(user)
{
  let i = 0;
  let count = 0;
  while (i < user.length)
  {
    i = esacpe_spaces(user, i);
    if (upercase(user, i) == true)
    {
      count++;
      i = go_to_space(user, i);
    }
    i++;
  }
  count--;
  return (count);
}

//========================== This is need to fix  ==================================================

alert("This is count of space -->  " + count_space(user));
alert("This is count of letter --> " + sentence_count(user));

alert("This is count of Upercases --> " + count_of_upercase(user));
alert("This is count of Lowercases --> " + count_of_lowercase(user));

alert("Count of special names --> " + special_name(user));