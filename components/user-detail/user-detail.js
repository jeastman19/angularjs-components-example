angular.module("userDetail", [])
    .component("userDetail", {
        templateUrl: "./components/user-detail/user-detail.html",
        controller: function () {
            var vm = this;
            vm.cambiarEmail = function () {
                vm.usuario.email = "miguel@desarrolloweb.com";
            }
        },
        bindings: {
            usuario: "=", //ten en cuenta que si usaras una propiedad con nombre camelCase (ejemplo: usuarioIndividual), cuando la utilices como atributo de la etiqueta deberás escribirla sin mayúsculas y con guiones: usuario-individual
            numero: "@"
        }
    })
