package tech.eastdilsecured.bdd.ui;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;
import tech.eastdilsecured.bdd.model.Category;

public class CategoryNavigationBar extends PageObject {

    public void selectCategory(Category category) {
        $(".hl-cat-nav").
                find(By.linkText( category.name() )).
                click();
    }
}
