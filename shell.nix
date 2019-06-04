{ pkgs ? import <nixpkgs> {}
}:

with pkgs;

stdenv.mkDerivation {
    name = "rad-issues-frontend";
    buildInputs = [ nodejs-10_x ] ;
    LANG = "en_US.UTF-8";
    libraryPkgconfigDepends = [ zlib ];
    shellHook = ''
      export PATH="`pwd`/node_modules/.bin:$PATH"
      export LOCALE_ARCHIVE="${pkgs.glibcLocales}/lib/locale/locale-archive";
    '';
}
