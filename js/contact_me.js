// $(function() {
//
//     $("input,textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function($form, event, errors) {
//             // additional error messages or events
//         },
//         submitSuccess: function($form, event) {
//             event.preventDefault(); // prevent default submit behaviour
//             // get values from FORM
//             var name = $("input#name").val();
//             var email = $("input#_replyto").val();
//             var telephone = $("input#telephone").val();
//             var message = $("textarea#message").val();
//             $.ajax({
//                 url: "https://formspree.io/f/xzbkkwlz",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     reply:email,
//                     telephone: telephone,
//                     complaint: complaint
//                 },
//                 cache: false,
//                 success: function() {
//                     // Success message
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-success')
//                         .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                         .append('</div>');
//
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function() {
//                     // Fail message
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
//                     $('#success > .alert-danger').append('</div>');
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//             })
//         },
//         filter: function() {
//             return $(this).is(":visible");
//         },
//     });
//
//     $("a[data-toggle=\"tab\"]").click(function(e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });
//
// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//     $('#success').html('');
// });

// Initialize and add the map
var mymap = L.map('mapid').setView([18.9352, -99.1939], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3BlcmVpZGEiLCJhIjoiY2tqYzQ3dTFlMHIxZjMxcXFjNmE1dzJlZCJ9.SfCqvPUzDiKaG2Bcp8MXaA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
// To add pin
var marker = L.marker([18.93293,-99.19276]).addTo(mymap);
marker.bindPopup("<b>Dra. Kenia Pereida Pérez</b><br>Corporativo Cuernavaca, Torre 3 piso 9. Av. De los 50mts, colonia Villas Deportivas").openPopup();
