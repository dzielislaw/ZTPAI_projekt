<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategoryController extends AbstractController
{
    #[Route('/api/category/{id}', name: 'app_category', methods: 'GET')]
    public function getTools(EntityManagerInterface $entityManager, $id): Response
    {
        $category = $entityManager->getRepository(Category::class)->find($id);

        return $this->json(
            $category,
            headers: ['Content-Type:' => 'application/json;charset=UTF-8']
        );
    }
}
