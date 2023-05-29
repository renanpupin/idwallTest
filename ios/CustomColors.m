#define UIColorFromRGB(rgbValue) \
[UIColor colorWithRed:((float)((rgbValue & 0xFF0000) >> 16))/255.0 \
                green:((float)((rgbValue & 0x00FF00) >>  8))/255.0 \
                 blue:((float)((rgbValue & 0x0000FF) >>  0))/255.0 \
                alpha:1.0]

#import "CustomColors.h"

@implementation CustomizedColors : NSObject

/// Cor utilizada em todos backgrounds
- (UIColor *)sdkBackground {
    return UIColorFromRGB(0xFFFFFF);
}

#pragma mark:- SDK Main tones

/// Cor dos botões e do contorno dos ícones.
- (UIColor *)sdkPrimary {
    return UIColorFromRGB(0x1976D2);
}

/// Cor do título e elementos da Navigation bar.
- (UIColor *)sdkNavigationBar {
    // return [self sdkPrimary];
    return UIColorFromRGB(0x4A4A4A);
}

/// Cor suplementar. Recomendamos que essa cor seja uma variante da sdkPrimary mais clara e/ou com me/Users/caio.franca/Desktop/rnSDKnos opacidade.
- (UIColor *)sdkSecundary {
    return UIColorFromRGB(0xF7B6A0);
}

/// Cor do fundo dos ícones. Recomendamos que essa cor seja uma variante da sdkPrimary mais clara e/ou com menos opacidade.
- (UIColor *)sdkTertiary {
    return UIColorFromRGB(0x4A9FF2);
}

/// Cor suplementar. Recomendamos que essa cor seja uma variante da sdkTertiary só que mais clara/com menos opacidade.
- (UIColor *)sdkQuaternary {
    return UIColorFromRGB(0xfff0e8);
}

/// Cor das sombras dos cards. Recomendamos que essa cor seja uma variante da sdkBackground em um tom mais escuro
- (UIColor *)shadowPrimary {
    return UIColorFromRGB(0xb8b8b8);
}

/// Cor do contorno dos ícones de sucesso.
- (UIColor *)successPrimary {
    return UIColorFromRGB(0x26B413);
}

/// Cor de fundo dos ícones de sucesso. Recomendamos que essa cor seja uma variante da successPrimary mais clara e/ou com menos opacidade.
- (UIColor *)successSecundary {
    return UIColorFromRGB(0xE4FFE0);
}


#pragma mark:- SDK Texts
  
/// Cor dos títulos dos documentos. Recomendamos que essa cor tenha o mesmo valor da sdkPrimary.
- (UIColor *)textPrimary {
    return UIColorFromRGB(0x1976D2);
}

/// Cor dos textos em geral.
- (UIColor *)textSecundary {
    return UIColorFromRGB(0x2E3A59);
}

/// Cor dos textos em estado desselecionado. Recomendamos que essa cor seja uma variante da textSecundary mais clara e/ou com menos opacidade.
- (UIColor *)textTerciary {
    return UIColorFromRGB(0x7a7a7a);
}

/// Cor dos textos dos botões e do ícone do documento selecionado.
- (UIColor *)buttonText {
    return UIColor.whiteColor;
}

/// Cor dos textos e ícones de aviso.
- (UIColor *)warningPrimary {
    return UIColorFromRGB(0xC66809);
}

@end

