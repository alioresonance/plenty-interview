package tech.eastdilsecured.bdd.features.navigation;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Managed;
import net.thucydides.core.annotations.Steps;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import tech.eastdilsecured.bdd.model.Category;
import tech.eastdilsecured.bdd.steps.NavigatingUser;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SerenityRunner.class)
public class WhenBrowsingProductCategories {

    @Steps
    NavigatingUser john;

    @Managed
    WebDriver browser;

    @BeforeClass
    public static void setUp() {
        final String DRIVER_PATH = System.getProperty("user.dir") + "/drivers/";
        final String OS = System.getProperty("os.name").toLowerCase();
        if (OS.contains("mac")) {
            System.setProperty("webdriver.chrome.driver", DRIVER_PATH + "chromedriver_mac64");
            //System.setProperty("webdriver.firefox.driver", DRIVER_PATH + "firefoxdriver_mac64");
        }
        else if (OS.contains("windows")) {
            System.setProperty("webdriver.chrome.driver", DRIVER_PATH + "chromedriver_win32.exe");
            //System.setProperty("webdriver.firefox.driver", DRIVER_PATH + "firefoxdriver_win64.exe");
        }
        else if (OS.contains("linux")) {
            System.setProperty("webdriver.chrome.driver", DRIVER_PATH + "chromedriver_linux64");
            //System.setProperty("webdriver.firefox.driver", DRIVER_PATH + "firefoxdriver_linux64");
        }
        else {
            throw new RuntimeException("Found invalid OS Name.");
        }
    }

    @Test
    public void shouldBeAbleToNavigateToTheMotorsCategory() {
        // Given
        john.isOnTheHomePage();
        // When
        john.navigatesToCategory(Category.Motors);
        // Then
        john.shouldSeePageTitleContaining("Auto Parts and Vehicles");
    }

    @Test
    public void purposefullyFailingTestToSeeFailuresOnAzure() {
        assertThat( false ).isTrue();
    }

}