document.addEventListener('DOMContentLoaded', function () {
  const moodleBTN = document.getElementById('moodleBTN');
  const meidaBTN = document.getElementById('meidaBTN');
  const pniotBTN = document.getElementById('pniotBTN');
  
  moodleBTN.addEventListener('click', () => {
      window.open('https://moodlearn.ariel.ac.il/auth/multioauth/login.php?userType=student');
  });
  
  meidaBTN.addEventListener('click', () => {
      window.open('https://meyda.ariel.ac.il/Portals/Student/login');
  });
  
  pniotBTN.addEventListener('click', () => {
      window.open('http://www.ariel.ac.il/projects/tzmm/secure/login2.asp?student=true');
  });
  
});

//test 2
